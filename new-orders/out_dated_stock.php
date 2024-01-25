<?php
// Code to handle the arrival of new stock
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $product = $_POST['product'];
    $quantity = $_POST['quantity'];
    // Store the data in a database or file
    
    // Redirect to prevent form resubmission
    header("Location: new_arrivals.php");
    exit();
}
$arrivedStock = [
    ['product' => 'Product 1', 'quantity' => 10],
    ['product' => 'Product 2', 'quantity' => 5],
    ['product' => 'Product 3', 'quantity' => 8]
];
?>

<!DOCTYPE html>
<html>
<head>
    <title>out-dated stock</title>
</head>
<body>
    <h1>out-dated stock</h1>

    <!-- Form to track out-dated stock -->
    <form method="POST" action="new_arrivals.php">
        <label for="product">Product:</label>
        <input type="text" name="product" id="product" required>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" required>
        <button type="submit">Track Out dated stock</button>
    </form>

    <h2>Out dated Stock</h2>
    <table>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
        </tr>
        <?php foreOut datedStock as $stock): ?>
            <tr>
                <td><?php echo $stock['product']; ?></td>
                <td><?php echo $stock['quantity']; ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>