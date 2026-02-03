// ================== CÂU 1 ==================
// Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// ================== CÂU 2 ==================
// Khởi tạo mảng products (ít nhất 6 sản phẩm, 2 danh mục)
let products = [
    new Product(1, "iPhone 15", 32000000, 5, "Phone", true),
    new Product(2, "Samsung S24", 28000000, 0, "Phone", true),
    new Product(3, "MacBook Air", 35000000, 3, "Laptop", true),
    new Product(4, "Dell XPS", 40000000, 2, "Laptop", false),
    new Product(5, "AirPods Pro", 6000000, 10, "Accessories", true),
    new Product(6, "Magic Mouse", 2500000, 0, "Accessories", false)
];

console.log("Danh sách products:", products);

// ================== CÂU 3 ==================
// Mảng mới chỉ chứa name và price
let namePriceList = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log("Câu 3 - Name & Price:", namePriceList);

// ================== CÂU 4 ==================
// Lọc sản phẩm còn hàng (quantity > 0)
let inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Còn hàng:", inStockProducts);

// ================== CÂU 5 ==================
// Kiểm tra có sản phẩm giá > 30.000.000 không
let hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có SP > 30tr:", hasExpensiveProduct);

// ================== CÂU 6 ==================
// Kiểm tra tất cả sản phẩm Accessories có đang bán không
let accessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

console.log("Câu 6 - Accessories đều đang bán:", accessoriesAvailable);

// ================== CÂU 7 ==================
// Tính tổng giá trị kho hàng
let totalInventoryValue = products.reduce((sum, p) => {
    return sum + p.price * p.quantity;
}, 0);

console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue);

// ================== CÂU 8 ==================
// for...of duyệt mảng products
console.log("Câu 8 - Duyệt products:");
for (let p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// ================== CÂU 9 ==================
// for...in in tên thuộc tính và giá trị
console.log("Câu 9 - Thuộc tính của sản phẩm đầu tiên:");
for (let key in products[0]) {
    console.log(key + ":", products[0][key]);
}

// ================== CÂU 10 ==================
// Danh sách tên sản phẩm đang bán và còn hàng
let sellingAndInStock = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("Câu 10 - SP đang bán & còn hàng:", sellingAndInStock);
