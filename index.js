// ১. শুরুতে ইমপোর্ট
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ২. রক্তদাতা রেজিস্ট্রেশন ফাংশন
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

window.registerDonor = async function() {
    console.log("Button clicked!"); // চেক করার জন্য
    
    // সব আইডি এখানে কনসোল লগ করুন, দেখুন কোনটা null আসে
    const name = document.getElementById("name")?.value;
    const phone = document.getElementById("phone")?.value;
    const fb = document.getElementById("fb")?.value;
    const bloodGroup = document.getElementById("bloodGroup")?.value;

    console.log("Data:", { name, phone, fb, bloodGroup });

    if (!name || !phone || !bloodGroup) {
        alert("এরর: ইনপুট ফিল্ড খালি আছে!");
        return;
    }

    try {
        if (!window.db) {
            alert("এরর: ডেটাবেস কানেকশন পাওয়া যায়নি!");
            return;
        }

        const docRef = await addDoc(collection(window.db, "users"), {
            name: name,
            phone_number: phone,
            fb_link: fb,
            blood_group: bloodGroup,
            location: "Home"
        });
        alert("সফলভাবে রেজিস্ট্রেশন হয়েছে! ID: " + docRef.id);
    } catch (e) {
        console.error("Firebase Error: ", e);
        alert("এরর: " + e.message);
    }
}
        
        // ফর্ম ক্লিয়ার করা
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("fb").value = "";
        document.getElementById("bloodGroup").value = "";
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("এরর হয়েছে! কনসোল চেক করুন।");
    }
}

// ৩. রক্তদাতা খোঁজার ফাংশন
window.searchDonor = function() {
    const group = document.getElementById('searchBloodGroup').value;
    if (group) {
        alert(group + " গ্রুপের রক্তদাতার তথ্য খুঁজছি...");
    } else {
        alert("অনুগ্রহ করে রক্তের গ্রুপ নির্বাচন করুন!");
    }
}

// ৪. লগইন ফর্ম হ্যান্ডলার (Admin & User)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const msg = document.getElementById('message');

        if ((user === "admin" || user === "user") && pass === "1234") {
            msg.style.color = "green";
            msg.textContent = "Login Successful!";
        } else {
            msg.style.color = "red";
            msg.textContent = "Invalid username or password!";
        }
    });
}

// ৫. পাসওয়ার্ড রিসেট ফাংশন
window.forgotPassword = function() {
    const email = prompt("আপনার রেজিস্টার্ড ইমেইলটি লিখুন:");
    if (email) {
        alert("পাসওয়ার্ড রিসেট করার লিঙ্ক " + email + " এ পাঠানো হয়েছে (টেস্ট মোড)।");
    }
}

console.log("রক্তসৈনিক বাংলাদেশ ফাউন্ডেশন অ্যাপ লোড হয়েছে।");
