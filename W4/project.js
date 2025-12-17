let email = prompt("Enter your email address");

email = email.toLowerCase();

if (email.includes("@") && email.includes(".")) {
    let parts = email.split("@");

    if (parts.length === 2 && parts[1].includes(".")) {
        let username = parts[0];
        let domain = parts[1];

        document.write("Valid Email Address<br>");
        document.write("Username: " + username + "<br>");
        document.write("Domain: " + domain);
    } else {
        document.write("Invalid Email Format");
    }
} else {
    document.write("Invalid Email Format");
}
