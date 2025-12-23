
document.addEventListener("DOMContentLoaded", () => {
    console.log("مرحبا بك في موقع الدراجات 🚴🏍⚡");
});
function addToCart(name, description, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = {
        name: name,
        description: description,
        price: price,
        image: image
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("تمت إضافة السيارة إلى السلة 🛒");
}
// زر شراء
function buyNow(name) {
    alert("✅الف مبروووك تم اضافة المنتج " + name + " إلى سلة الشراء 🛒");
}
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "0000") {
        window.location.href = "../HTML/admin.html";
    }
    else if (username === "user" && password === "1234") {
        window.location.href = "../HTML/user.html";
    }
    else {
        alert("بيانات الدخول غير صحيحة");
    }
}

// فتح الصورة في نافذة منبثقة
function openImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = src;
}

// إغلاق النافذة عند الضغط على X
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}


function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartDiv = document.getElementById("cartItems");
    let total = 0;

    cartDiv.innerHTML = "";

    if (cart.lenght === 0) {
        cartDiv.innerHTML = "<p>السلة فارغة </p>";
        document.getElementById("total").innerText = "";
        return;
    }


    cart.forEach((item, index) => {
        total += Number(item.price);

        cartDiv.innerHTML += `
            <div class="card">
           <figure>
                <img src="../Image/${item.image}" width="150">
                <figcaption>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p>الوصف: ${item.description}$</p>
               
                <p> السعر الحالي: ${item.price}$</p>
                <p> السعر الحالي: ${item.price}$</p>
                
                </figcaption>
                 </figure>
                 <button onclick="removeFromCart(${index})">حذف </button>
            </div>
            <hr>
        `;
    });

    document.getElementById("total").innerText =
        "💰 السعر الإجمالي: " + total + "$";
}
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

function showSection(sectionId) {
    let sections = document.querySelectorAll(".admin-section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

function fakeAction(message) {
    alert(message);
}
function addCar() {
    let name = document.getElementById("carName").value;
    let desc = document.getElementById("carDesc").value;
    let price = document.getElementById("carPrice").value;
    let image = document.getElementById("carImage").value;

    if (name === "" || desc === "" || price === "" || image === "") {
        alert("يرجى تعبئة جميع الحقول");
        return;
    }

    let cars = JSON.parse(localStorage.getItem("cars")) || [];

    let newCar = {
        name: name,
        description: desc,
        price: price,
        image: image
    };

    cars.push(newCar);

    localStorage.setItem("cars", JSON.stringify(cars));

    alert("✅ تمت إضافة السيارة بنجاح");

    // تفريغ الحقول
    document.getElementById("carName").value = "";
    document.getElementById("carDesc").value = "";
    document.getElementById("carPrice").value = "";
    document.getElementById("carImage").value = "";
}