import React from 'react';

// Componente FileUpload_Status agora aceitando a prop setFiles para atualizar o estado dos arquivos
const FileUpload_Status = ({ setFiles }) => {
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        console.log('Arquivos selecionados (status):', selectedFiles); // Verificar se os arquivos foram selecionados
        setFiles(selectedFiles); // Atualiza o estado no componente pai
    };

    return (
        <div className="font-sans flex flex-col items-center justify-center border-gray-500 border-2 border-dashed bg-gradient-to-b from-[#333641] to-[#2D3039] h-72 w-full max-w-lg mx-auto mt-10 bg-gray-800">
            <label className="cursor-pointer">
                <div className="flex flex-col items-center space-y-2">
                    <p className="text-gray-400 text-2xl">Adicione seu .csv dos Status para</p>
                    <p className="text-gray-400 text-2xl">treinar o modelo</p>
                    <svg width="110" height="110" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="40" y="70" width="70" height="40" rx="5" stroke="#888888" strokeWidth="3" />
                        <circle cx="95" cy="90" r="4" fill="#888888" />
                        <path d="M75 30 L75 80" stroke="#888888" strokeWidth="3" strokeLinecap="round" />
                        <path d="M60 45 L75 30 L90 45" stroke="#888888" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </div>
                <input type="file" className="hidden" onChange={handleFileChange} multiple />
            </label>
        </div>
    );
};

export default FileUpload_Status;
