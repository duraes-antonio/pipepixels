export function filesToImageData(
    files: File[],
    callback: (images: ImageData[]) => void,
) {
    const imageDataArray: ImageData[] = [];
    let filesProcessed = 0;

    // Função para processar um único arquivo
    function processFile(file: File) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const img = new Image();

            img.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d')!;

                canvas.width = img.width;
                canvas.height = img.height;

                ctx!.drawImage(img, 0, 0);

                // Obter os dados da imagem (ImageData)
                const imageData = ctx!.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height,
                );

                imageDataArray.push(imageData);

                // Verificar se todos os arquivos foram processados
                filesProcessed++;

                if (filesProcessed === files.length) {
                    callback(imageDataArray); // Chamar o callback com todos os ImageData
                }
            };

            img.src = <string>event.target!.result;
        };

        reader.readAsDataURL(file); // Ler o arquivo como URL de dados
    }

    // Iterar sobre todos os arquivos e processá-los
    for (let i = 0; i < files.length; i++) {
        processFile(files[i]);
    }
}

export async function imageDataToFile(
    imageData: ImageData,
    filename = 'image.png',
) {
    // 1. Criar um canvas e desenhar o ImageData nele
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;

    canvas.width = imageData.width;
    canvas.height = imageData.height;

    ctx.putImageData(imageData, 0, 0);

    // 2. Converter o conteúdo do canvas em uma URL de dados (no caso PNG, você pode mudar para 'image/jpeg' para JPEG)
    const dataURL = canvas.toDataURL('image/png'); // ou 'image/jpeg' se preferir

    // 3. Converter a URL de dados em um Blob
    return await fetch(dataURL)
        .then((response) => response.blob())
        .then((blob) => {
            // 4. Criar um File a partir do Blob
            const file = new File([blob], filename, { type: 'image/png' }); // ou 'image/jpeg' se for o caso
            return file;
        })
        .catch((error) => console.error('Erro ao converter para Blob:', error));
}
