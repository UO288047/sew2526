//poner los include SIEMPRE ANTES
//session.start()

class Cronometro{

    private $tiempo;
    private $inicio;

    public function __construct(){
        $this->tiempo = 0;
    }


    public function arrancar(){
        $this->inicio = microtime(true);
    }


    public function parar(){
       $fin =  microtime(true);
       $this->tiempo = $fin - $this->inicio;
    }


    public function mostrar(){
        $minutosTranscurridos = floor($this->tiempo / 60);
        $segundosYdecimasTranscurridos = $this->tiempo - ($minutosTranscurridos * 60);
        //Revisar si se usa printf o echo
        printf("%02d:%04.1f", $minutosTranscurridos, $segundosYdecimasTranscurridos);
    }


}