import '.././styles/style.scss';
import * as bootstrap from 'bootstrap';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1 class="fw-bold pb-3">Vite Boilerplate</h1>
            <p>
                Diese Boilerplate ist für die Erstellung von<br />
                <span class="fst-italic fw-bold"
                    >HTML5, SCSS, JAVASCRIPT/TYPESCRIPT und SQL-Anbindung</span
                ><br />
                in Verbindung mit
                <span class="fst-italic fw-bold"> Bootstrap</span> sowie
                <span class="fst-italic fw-bold">Bootstrap-icons</span> gedacht.
            </p>

            <p>
                Dafür sind schon alle nötigen Erweiterungen und Dateien
                vorkonfiguriert. Um eine Life-Preview wärend des Programmieren
                der Seite zu erhalten.<br/> Starten sie im Terminal den Befehl:
                <code class="fw-bold" id="code_highlight">npm run dev</code>.
            </p>
            <p>Viel Spass beim Programmieren...</p>
`;
