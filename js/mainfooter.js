// Função para incluir o rodapé
function includeFooter() {

    var footer = `
        <footer>


            <div class="copyright-section">
                 
              <p>Copyright © 2023, <a href="" target="_blank">Pandora Data</a>, All rights reserved</p>
    

            </div>


            <div class="social-media-section">


                <div class="redes-sociais-footer">

                    <a href="https://www.youtube.com/@lupita_Oliver/videos" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@uai_lives" target="_blank"><i class="fab fa-tiktok"></i></a>
                    <a href="https://discord.gg/uairoleplay" target="_blank"><i class="fab fa-discord"></i></a>
             
                    </div>

            </div>

  
            
        </footer>
    `;

    document.write(footer);
    // document.getElementById("current-year").textContent = new Date().getFullYear();

}

// Incluir o cabeçalho e o rodapé nas páginas
includeFooter();
