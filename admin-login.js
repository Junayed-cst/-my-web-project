// ১. লগইন হ্যান্ডলার
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ফর্ম সাবমিট হওয়া আটকানো

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');

    // এখানে আপনার এডমিন ইউজারনেম ও পাসওয়ার্ড চেক হবে
    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.textContent = "Login Successful! Redirecting...";
        
        // সফল লগইনের পর এখানে ড্যাশবোর্ডে পাঠাতে পারেন:
        // window.location.href = "admin-dashboard.html"; 
    } else {
        msg.style.color = "red";
        msg.textContent = "Invalid username or password!";
    }
});

// ২. পাসওয়ার্ড রিসেট ফাংশন
function forgotPassword() {
    const email = prompt("আপনার রেজিস্টার্ড ইমেইলটি লিখুন:");
    if (email) {
        alert("পাসওয়ার্ড রিসেট লিঙ্ক " + email + " এ পাঠানো হয়েছে। (এটি টেস্ট মোডে আছে)");
    }
}
