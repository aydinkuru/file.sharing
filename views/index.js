< !DOCTYPE html >

< !DOCTYPE html >
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<form style="display: grid; gap: .5rem; grid-template-columns: auto 1fr; max-width: 500px; margin: 0 auto;">
    <label for="file">File:</label>
    <input type="file" id="file" name="file" required />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" />
    <button style="grid-column: span 2;" type="submit">Share</button>
  </form>
</body>
</html>