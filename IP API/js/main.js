document.getElementById("btnGetIp").addEventListener("click", function () {
    const inputIp = document.getElementById("inputIpAddress").value.trim();
    document.getElementById("alert-info").innerHTML = "";

    fetch(`https://ipinfo.io/${inputIp}/json?token=c26ad12c280a5c`)
        .then(response => response.json())
        .then(data => {
            const { ip, city = "-", country = "-", org = "-", region = "-", loc = "-" } = data;
            
            const newRow = `
                <tr>
                    <td>${ip}</td>
                    <td>${org}</td>
                    <td>${country}</td>
                    <td>${city}</td>
                    <td>${region}</td>
                    <td>${loc}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="removeRow(this)">Remover</button></td>
                </tr>
            `;
            document.getElementById("ipTableBody").insertAdjacentHTML("beforeend", newRow);
        });
});

function removeRow(button) {
    button.closest("tr").remove();
}
