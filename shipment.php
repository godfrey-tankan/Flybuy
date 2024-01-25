<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $product = $_POST['product'];
    $quantity = $_POST['quantity'];
    
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
    <title>New Arrivals</title>
</head>
<body>
    <h1>New Arrivals</h1>

    <form method="POST" action="new_arrivals.php">
        <label for="product">Product:</label>
        <input type="text" name="product" id="product" required>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" required>
        <button type="submit">Track Arrival</button>
    </form>

    <h2>Arrived Stock</h2>
    <table>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
        </tr>
        <?php foreach ($arrivedStock as $stock): ?>
            <tr>
                <td><?php echo $stock['product']; ?></td>
                <td><?php echo $stock['quantity']; ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>