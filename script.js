```javascript
document.addEventListener("DOMContentLoaded", () => {

    const syncVal = document.getElementById("sync-val");
    const syncFill = document.querySelector(".sync-fill");
    const hostDisplay = document.getElementById("host-display");
    const button = document.getElementById("btn-sync");


    /* =========================================
       HOST / SERVER
    ========================================= */

    const host = window.location.hostname || "LOCALHOST";
    const port = window.location.port || "80";

    hostDisplay.textContent = `${host}:${port}`;


    /* =========================================
       SYNC RATE
    ========================================= */

    function updateSyncRate() {

        const rate = (99.2 + Math.random() * 0.7).toFixed(1);

        syncVal.textContent = `${rate}%`;

        syncFill.style.width = `${rate}%`;
    }

    setInterval(updateSyncRate, 3000);


    /* =========================================
       NERV CONNECTION TEST
    ========================================= */

    button.addEventListener("click", () => {

        if (button.dataset.testing === "true") {
            return;
        }

        button.dataset.testing = "true";

        button.textContent = "MAGI SYSTEM // CONNECTING...";

        button.style.background = "#ff6600";
        button.style.color = "#000";


        setTimeout(() => {

            button.textContent =
                "✓ CONNECTION ESTABLISHED // NERV ONLINE";

            button.style.background = "#00aa55";
            button.style.color = "#fff";


            setTimeout(() => {

                button.textContent =
                    "INICIAR PRUEBA DE CONEXIÓN NERV";

                button.style.background = "";
                button.style.color = "";

                button.dataset.testing = "false";

            }, 2500);

        }, 1200);

    });


    /* =========================================
       TERMINAL STYLE CONSOLE MESSAGE
    ========================================= */

    console.log(
        "%c NERV SYSTEM ONLINE ",
        "background:#ff6600;color:#000;font-weight:bold;padding:5px;"
    );

    console.log(
        `%c HOST: ${host}:${port}`,
        "color:#ff6600;font-family:monospace;"
    );

    console.log(
        "%c PERSONNEL FILE: EMA-2026",
        "color:#00ff66;font-family:monospace;"
    );

});
```
