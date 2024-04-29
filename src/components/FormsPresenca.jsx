import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

const FormsPresenca = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [presence, setPresence] = useState('Sim');
  const [adultsNum, setAdultsNum] = useState(0);
  const [childrenNum, setChildrenNum] = useState(0);
  const [comments, setComments] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleConfirmation = (e) => {
    setPresence(e.target.value);
  };
  const handleAdults = (e) => {
    setAdultsNum(e.target.value);
  };
  const handleChildren = (e) => {
    setChildrenNum(e.target.value);
  };
  const handleComments = (e) => {
    setComments(e.target.value);
  };

  const handleSubmition = (e) => {
    e.preventDefault();
    if (name && surname && presence && adultsNum && comments) {
      toast.success('Confirmação Enviada.');
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      );
      setName('');
      setSurname('');
      setPresence('Sim');
      setAdultsNum(0);
      setChildrenNum(0);
      setComments('');
    } else {
      toast.error('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className=" md:h-[calc(100dvh-130px-64px)] py-12 w-full flex flex-col justify-center items-center">
      <h1 className="font-titleFont pb-5 md:pb-14 text-center text-4xl md:text-5xl lg:text-6xl">
        Confirmar Presença
      </h1>
      <form
        onSubmit={handleSubmition}
        className="w-[90%] max-w-lg lg:max-w-2xl"
      >
        <div className="flex flex-wrap mb-4">
          <div className="w-[100%] md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="from-name"
            >
              Nome
            </label>
            <input
              className="appearance-none block w-[100%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="from-name"
              id="from-name"
              type="text"
              placeholder="Gusttavo"
              onChange={handleName}
              value={name}
            />
          </div>
          <div className="w-[100%] md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="from-surname"
            >
              Sobrenome
            </label>
            <input
              className="appearance-none block w-[100%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="from-surname"
              name="from-surname"
              type="text"
              placeholder="Lima"
              onChange={handleSurname}
              value={surname}
            />
          </div>
        </div>

        <div className="flex flex-wrap md:mb-8">
          <div className="w-[100%] md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="confirmation"
            >
              Confirma Presença?
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-[100%] bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="confirmation"
                name="confirmation"
                onChange={handleConfirmation}
                value={presence}
              >
                <option>Sim</option>
                <option>Não</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="adults-number"
            >
              Nº adultos?
            </label>
            <input
              className="appearance-none block w-[100%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="adults-number"
              name="adults-number"
              type="number"
              placeholder="0"
              onChange={handleAdults}
              value={adultsNum}
            />
          </div>

          <div className="w-[100%] md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="children-number"
            >
              Nº crianças?
            </label>
            <input
              className="appearance-none block w-[100%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="children-number"
              name="children-number"
              type="number"
              placeholder="0"
              onChange={handleChildren}
              value={childrenNum}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-[100%] px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Nome dos Acompanhantes
            </label>
            <input
              className="appearance-none block w-[100%] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              name="message"
              type="text"
              placeholder="Fulano e Ciclano"
              onChange={handleComments}
              value={comments}
            />
            <p className="text-gray-600 text-xs italic">
              Por favor, descreva todos os acompanhantes, inclusive crianças.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="hover:underline w-32 md:w-40 lg:w-48 lg:h-20 h-16 rounded-2xl text-white bg-[#7A7E5E] font-menuFont text-center text-lg md:text-xl lg:text-2xl"
          >
            Confirmar Presença
          </button>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </form>
    </div>
  );
};

export default FormsPresenca;
