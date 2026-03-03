const form = document.getElementById("userForm");
const out = document.getElementById("out");

form.addEventListener("submit", async(e)=>{
    e.preventDefault();

    const fd = new FormData(form);
    const payload = {
        name:fd.get("name"),
        lastname:fd.get("lastname"),
        city:fd.get("city"),
        birhday:fd.get("birhday"),
        hobbies:fd.get("hobbies"),
        phone_number:fd.get("phone_number"),
        sallary:fd.get("sallary"),
        group_id:Number(fd.get("group_id")),
    };

    const r = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(payload),
    });

    out.textContent = `HTTP ${r.status}\n${await r.text()}`;
})