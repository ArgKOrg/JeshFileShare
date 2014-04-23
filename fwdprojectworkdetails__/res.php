<?php
	//$fid=$_GET['fid'];
	//$pass =$_GET['pass'];
	$fid=$_GET['fid'];
	$db='folder';
	$conn=mysql_connect("localhost","root","") or die("unable to connect database");
	mysql_select_db($db) or die("error");
	$q1="select * from fold where pid='$fid'";
	$rs1=mysql_query($q1) or die("error in query processing" .mysql_error());
	$num_rows=mysql_num_rows($rs1);
	//echo"".$num_rows;
	//echo"".$q1;
        //$q="insert into fold(fid,pid,des,leaf)  values('$num_rows + 1','$fid','leaf',1)";
	//$rs=mysql_query($q) or die("error in query processing" .mysql_error());
	header("Content-Type: text/xml");
	echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
	$resultxml = '<result>' ;
	while($rr=mysql_fetch_array($rs1)){
		$fid=$rr[1];
                $le=$rr[4];
                $fname=$rr[5];   
		//$fid=$ss;
		//echo $fid;
		//echo"<br>".$fid."<br>";
		//include"ff.html";
		//echo"<br>".$rr[];
		//echo'<show>';
		$resultxml=$resultxml.'<field>'.$fid.'</field><leaf>'.$le.'</leaf><fname>'.$fname.'</fname>'; 
		//echo'<field>'.$fid.'<field';
		//echo '</show>';

	}
         //$leaf= $leaf.'</show>';
        //$leaf=$leaf.'</result>';
	$resultxml=$resultxml.'</result>';
	echo $resultxml;
        //echo $leafid; 
     // echo $s='<img src="file.gif"';

mysql_close($conn);
?>

 
