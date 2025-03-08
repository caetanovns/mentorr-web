import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import echo from '../config/echo';
import { toast, ToastContainer } from "react-toastify";

function PerfilMentor() {

  const [texto, setTexto] = useState();

  useEffect(() => {
    console.log("iniciou componente");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    echo.channel('channel-enroll').listen('EnrollEvent', (event: any) => {
      const data = JSON.parse(event.data);
      setTexto(data.students);
      toast("Novo aluno matriculado!");
    });

    return () => {
      echo.leave('channel-enroll');
      echo.disconnect();
    };
  },[]);


  const { id } = useParams();
  return <><p>User: {id} - atualizando em tempo real...: {texto}</p><ToastContainer /></>;
}

export default PerfilMentor;
