
<?php
$name=$_GET['username'];
$pass =$_GET['pass'];
$db='log';
$conn=mysql_connect("localhost","root","") or die("unable to connect database");
mysql_select_db($db) or die("error");
$q1="select * from login ";
$rs1=mysql_query($q1) or die("error in query processing" .mysql_error());
$num_rows=mysql_num_rows($rs1);
//echo"".$num_rows;
//echo"".$q1;

while($rr=mysql_fetch_array($rs1))
{

if(ereg($name,$rr[1] ))  
{
if(ereg($pass,$rr[2]))
{

$flag=true;
}
}
}
if($flag==true)
{
echo"<br>" .$name."   inbox";

//include"res1.html";
//echo"LOGIN TO NEW PAGE";
//echo"<br>already available";
}
else
{
echo"your username and password are mismatch";
}
mysql_close($conn);
?>
