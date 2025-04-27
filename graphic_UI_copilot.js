<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Signup</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(to right, #ff9966, #ff5e62);
            color: white;
        }
        .container {
            background: rgba(255, 255, 255, 0.2);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            backdrop-filter: blur(10px);
        }
        h2 {
            font-size: 24px;
        }
        p {
            font-size: 16px;
            margin-bottom: 20px;
        }
        input[type="email"] {
            width: 80%;
            padding: 12px;
            margin: 10px 0;
            border: none;
            border-radius: 8px;
            outline: none;
        }
        button {
            background-color: #ff5e62;
            color: white;
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
        }
        button:hover {
            background-color: #ff9966;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Join Our Newsletter</h2>
        <p>Get exclusive updates right in your inbox!</p>
        <form>
            <input type="email" placeholder="Enter your email" required>
            <br>
            <button type="submit">Subscribe</button>
        </form>
    </div>

</body>
</html>
