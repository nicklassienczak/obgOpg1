
document.addEventListener("DOMContentLoaded", () => {
    const fetchFilesButton = document.getElementById("fetchBtn");
    const fileList = document.getElementById("fileList");

    fetchFilesButton.addEventListener("click", () => {
        // Erstat 'YOUR_ACCESS_TOKEN' med din Dropbox Access Token
        const accessToken = window.MY_ACCESS_TOKEN;

        // Erstat 'YOUR_FOLDER_PATH' med stien til din "TestMappe" i Dropbox
        const folderPath = '/nskDB/';

        fetch(`https://api.dropboxapi.com/2/files/list_folder`, {
            method: 'POST',
            headers: {
                'Authorization': '${accessToken}',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                path: folderPath
            })
        })
            .then(response => response.json())
            .then(data => {
                fileList.innerHTML = "<h2>Filer og Mapper i Dropbox</h2>";
                data.entries.forEach(entry => {
                    fileList.innerHTML += `<p>${entry.name} (${entry[".tag"]})</p>`;
                });
            })
            .catch(error => {
                fileList.innerHTML = `<p>Fejl ved hentning af filer og mapper: ${error}</p>`;
            });
    });
});
