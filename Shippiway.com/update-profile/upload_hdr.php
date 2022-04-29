<?php
if(is_array($_FILES)) {
if(is_uploaded_file($_FILES['headerImage']['tmp_name'])) {
$sourcePath2 = $_FILES['headerImage']['tmp_name'];
$targetPath2 = "images/header.png";
if(move_uploaded_file($sourcePath2,$targetPath2)) {
?>
<img class="image-preview" src="<?php echo $targetPath2; ?>" class="upload-preview" />
<?php
}
}
}
?>