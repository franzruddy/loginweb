<?php
session_start();
class Conectar {
	protected $dbh;
		protected function Conexion(){
			try {
				$conectar = $this->dbh = new PDO("mysql:host=durvbryvdw2sjcm5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;dbname=wfy34m4st3xsaqqj","d4kddy7z605p7jqr","cyborpoy7tc08fi8");
				
				return $conectar;	
			} catch (Exception $e) {
				print "¡Error Market Player BD!: " . $e->getMessage() . "<br/>";
				die();	
			}
		}
		
		public function set_names(){	
			return $this->dbh->query("SET NAMES 'utf8'");
		}

		public function ruta(){
			return "http://localhost/MarketPlayer/";
		}
	}
?>
