<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<center>
    <div id="v-for-object">
        <widget>
            <br><br>
            <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
            </div>
            <div id="art">
                <div id="v-for-object" class="fila">
                    <div v-for="value in gene" v-bind:class ="value"></div>
                </div>
            </div>
        </widget>
    </div>
</center>
<script src="script.js"></script>
</body>
</html>
