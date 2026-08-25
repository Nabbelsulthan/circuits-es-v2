// import { useEffect, useState } from "react";
// import { API_URL } from "../Config/Config";
// import "./RecentUpdates.css";


// export default function RecentUpdates() {

//   const [updates, setUpdates] = useState([]);


//   useEffect(() => {

//     const customerId =
//       localStorage.getItem("customerId");

//     if (!customerId) {
//       return;
//     }


//     const loadUpdates = async () => {

//       try {

//         /* =========================================
//            GET CUSTOMER PROJECTS
//         ========================================= */

//         const projectsResponse =
//           await fetch(
//             `${API_URL}/api/customers/${customerId}/projects`
//           );


//         if (!projectsResponse.ok) {
//           throw new Error(
//             "Failed to load projects"
//           );
//         }


//         const projects =
//           await projectsResponse.json();


//         /* =========================================
//            GET UPDATES FOR EACH PROJECT
//         ========================================= */

//         let allUpdates = [];


//         for (const project of projects) {

//           try {

//             const response =
//               await fetch(
//                 `${API_URL}/api/updates/${project.id}`
//               );


//             if (!response.ok) {
//               continue;
//             }


//             const data =
//               await response.json();


//             if (Array.isArray(data)) {

//               allUpdates = [
//                 ...allUpdates,

//                 ...data.map(
//                   (item) => ({

//                     ...item,

//                     project_name:
//                       project.project_name,

//                   })
//                 ),

//               ];

//             }

//           } catch (error) {

//             console.error(
//               `Failed to load updates for project ${project.id}:`,
//               error
//             );

//           }

//         }


//         /* =========================================
//            SORT BY LATEST UPDATE
//         ========================================= */

//         allUpdates.sort(
//           (a, b) =>
//             new Date(b.created_at) -
//             new Date(a.created_at)
//         );


//         /* =========================================
//            SHOW ONLY LATEST 10
//         ========================================= */

//         setUpdates(
//           allUpdates.slice(0, 10)
//         );


//       } catch (error) {

//         console.error(
//           "Failed to load recent updates:",
//           error
//         );

//         setUpdates([]);

//       }

//     };


//     loadUpdates();

//   }, []);


//   return (

//     <section className="updates-card">

//       {/* =========================================
//                 HEADER
//             ========================================= */}

//       <div className="updates-header">

//         <div className="updates-title-group">

//           <span className="updates-eyebrow">
//             CES CONNECT
//           </span>

//           <h3>
//             Recent Activity
//           </h3>

//         </div>


//         <span className="updates-count">
//           {updates.length}
//         </span>

//       </div>


//       {/* =========================================
//                 EMPTY STATE
//             ========================================= */}

//       {updates.length === 0 ? (

//         <div className="no-updates">

//           <span className="no-updates-icon">
//             ✓
//           </span>

//           <span>
//             No recent updates available
//           </span>

//         </div>

//       ) : (

//         /* =========================================
//            TIMELINE
//         ========================================= */

//         <div className="updates-timeline">

//           {updates.map((update, index) => (

//             <div
//               key={
//                 update.id ||
//                 `${update.project_name}-${index}`
//               }
//               className="timeline-item"
//             >

//               {/* Timeline marker */}

//               <div className="timeline-marker">

//                 <div className="timeline-dot">
//                 </div>

//               </div>


//               {/* Timeline content */}

//               <div className="timeline-content">

//                 <h4 className="update-project">

//                   {update.project_name ||
//                     "Project Update"}

//                 </h4>


//                 <p className="update-text">

//                   {update.update_text ||
//                     "Project information has been updated."}

//                 </p>


//                 {update.created_at && (

//                   <span className="update-date">

//                     🕒{" "}

//                     {new Date(
//                       update.created_at
//                     ).toLocaleDateString(
//                       undefined,
//                       {
//                         day: "2-digit",
//                         month: "short",
//                         year: "numeric",
//                       }
//                     )}

//                   </span>

//                 )}

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//     </section>

//   );

// }



import { useEffect, useState } from "react";
import { API_URL } from "../Config/Config";
import { supabase, authenticateRealtime, } from "../Config/supabaseClient";
import "./RecentUpdates.css";


export default function RecentUpdates() {

  const [updates, setUpdates] = useState([]);


  useEffect(() => {

    const customerId =
      localStorage.getItem("customerId");


    if (!customerId) {
      return;
    }


    let channel = null;
    let cancelled = false;


    /* =========================================================
       LOAD RECENT UPDATES
    ========================================================= */

    const loadUpdates = async () => {

      try {

        /* =========================================
           GET CUSTOMER PROJECTS
        ========================================= */

        const projectsResponse =
          await fetch(
            `${API_URL}/api/customers/${customerId}/projects`
          );


        if (!projectsResponse.ok) {

          throw new Error(
            "Failed to load projects"
          );

        }


        const projects =
          await projectsResponse.json();


        /* =========================================
           GET UPDATES FOR EACH PROJECT
        ========================================= */

        let allUpdates = [];


        for (const project of projects) {

          try {

            const response =
              await fetch(
                `${API_URL}/api/updates/${project.id}`
              );


            if (!response.ok) {
              continue;
            }


            const data =
              await response.json();


            if (Array.isArray(data)) {

              allUpdates = [
                ...allUpdates,

                ...data.map(
                  (item) => ({

                    ...item,

                    project_name:
                      project.project_name,

                  })
                ),

              ];

            }


          } catch (error) {

            console.error(
              `Failed to load updates for project ${project.id}:`,
              error
            );

          }

        }


        /* =========================================
           SORT BY LATEST UPDATE
        ========================================= */

        allUpdates.sort(
          (a, b) =>
            new Date(b.created_at) -
            new Date(a.created_at)
        );


        /* =========================================
           SHOW ONLY LATEST 10
        ========================================= */

        if (!cancelled) {

          setUpdates(
            allUpdates.slice(0, 10)
          );

        }


      } catch (error) {

        console.error(
          "Failed to load recent updates:",
          error
        );


        if (!cancelled) {

          setUpdates([]);

        }

      }

    };


    /* =========================================================
       SETUP REALTIME
    ========================================================= */

    const setupRealtime = async () => {

      try {

        console.log(
          "Authenticating Supabase Realtime for Recent Updates..."
        );


        // const authenticated =
        //   await authenticateRealtime();


        // if (
        //   !authenticated ||
        //   cancelled
        // ) {

        //   console.error(
        //     "Unable to authenticate Supabase Realtime for Recent Updates"
        //   );

        //   return;

        // }

        await authenticateRealtime();

        if (cancelled) {
          return;
        }


        console.log(
          "Supabase Realtime authenticated for Recent Updates"
        );


        /* =========================================
           INITIAL LOAD
        ========================================= */

        await loadUpdates();


        if (cancelled) {
          return;
        }


        /* =========================================
           START REALTIME
        ========================================= */

        console.log(
          "Starting Recent Updates realtime for customer:",
          customerId
        );


        channel =
          supabase
            .channel(
              `customer-recent-updates-${customerId}`
            )
            .on(
              "postgres_changes",
              {
                event: "*",
                schema: "public",
                table: "project_updates",
              },
              async (payload) => {

                console.log(
                  "🔔 PROJECT UPDATE REALTIME EVENT:",
                  payload
                );


                /*
                 * A project update was created,
                 * changed or deleted.
                 *
                 * Reload everything through
                 * the existing backend API.
                 *
                 * This preserves:
                 *
                 * - project_name
                 * - sorting
                 * - latest 10 updates
                 */

                await loadUpdates();

              }
            )
            .subscribe(
              (status) => {

                console.log(
                  "Recent Updates realtime status:",
                  status
                );

              }
            );


      } catch (error) {

        console.error(
          "Recent Updates realtime setup failed:",
          error
        );

      }

    };


    /* =========================================================
       START
    ========================================================= */

    setupRealtime();


    /* =========================================================
       CLEANUP
    ========================================================= */

    return () => {

      cancelled = true;


      if (channel) {

        console.log(
          "Removing Recent Updates realtime channel"
        );


        supabase.removeChannel(
          channel
        );

      }

    };


  }, []);


  return (

    <section className="updates-card">

      {/* =========================================
                HEADER
            ========================================= */}

      <div className="updates-header">

        <div className="updates-title-group">

          <span className="updates-eyebrow">
            CES CONNECT
          </span>

          <h3>
            Recent Activity
          </h3>

        </div>


        <span className="updates-count">
          {updates.length}
        </span>

      </div>


      {/* =========================================
                EMPTY STATE
            ========================================= */}

      {updates.length === 0 ? (

        <div className="no-updates">

          <span className="no-updates-icon">
            ✓
          </span>

          <span>
            No recent updates available
          </span>

        </div>

      ) : (

        /* =========================================
           TIMELINE
        ========================================= */

        <div className="updates-timeline">

          {updates.map((update, index) => (

            <div
              key={
                update.id ||
                `${update.project_name}-${index}`
              }
              className="timeline-item"
            >

              {/* Timeline marker */}

              <div className="timeline-marker">

                <div className="timeline-dot">
                </div>

              </div>


              {/* Timeline content */}

              <div className="timeline-content">

                <h4 className="update-project">

                  {update.project_name ||
                    "Project Update"}

                </h4>


                <p className="update-text">

                  {update.update_text ||
                    "Project information has been updated."}

                </p>


                {update.created_at && (

                  <span className="update-date">

                    🕒{" "}

                    {new Date(
                      update.created_at
                    ).toLocaleDateString(
                      undefined,
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}

                  </span>

                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}