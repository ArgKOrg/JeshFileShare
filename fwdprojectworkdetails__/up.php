<?php 
$fid='<img id="hidden" src="" style="visibility:hidden" width=0 height=0>';
$uploaddir='/var/www/html/';
$uploadfile=$uploaddir.basename($_FILES['code']['name']);
//echo basename($_FILES['code']['name']);
echo '<pre>';
if (move_uploaded_file($_FILES['code']['tmp_name'], $uploadfile))
 {
    echo "File was successfully uploaded.\n";

}

 else 
{
    echo "Possible file upload attack!\n";
}
print "</pre>";
$conn=mysql_connect("localhost","root","");
$db=mysql_select_db("folder");

//echo" inserted in database";


echo"<br>";

//echo 'Here is some more debugging info:';
//print_r($_FILES);
$filename=$_FILES['code']['name'];
$fd=filemtime($filename);
$md=date("y/m/d",$fd);
echo"<br>Modified Date:";
echo "<br>". $md;
//echo "<br>" . $fd ;
//$size=$_FILES['code']['size'];
echo"<br>filename:";
echo"<br>" . $filename ;
//echo $fid;
$q2="select * from fold ";
$rs2=mysql_query($q2) or die("error in query processing" .mysql_error());
 $num_rows=mysql_num_rows($rs2); 
$q="update  test set fname ='$filename' where sno='$num_rows+1';";
$rs=mysql_query($q);
//$query = "insert into upload(username,modifydate,location) values('aukbc-members','$md','$uploadfile')";
//$result=mysql_query($query);
//echo $size;
//$destfile="/var/www/html/upload/".$filename;
//echo"<br>";
//echo"the uploaded file path is:";

//echo $destfile;
//$fp = fopen($filename, 'r');
//$content = fread($fp, filesize($filename));
//$content = addslashes($content);
//fclose($fp);
//echo $content;
mysql_close($conn);
?>
