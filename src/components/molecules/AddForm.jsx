
import React, { useState, useEffect } from 'react';

const AddForm = () => {

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const [formData, setFormData] = useState({
    name: '',
    image: null,
    description: '',
    category_id: '',
    intolerance_ids: [],
    price: 0,
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: e.target.value,
    }));
  };

  const handleIntoleranceChange = (e) => {
    const selectedIntolerances = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      intolerance_ids: selectedIntolerances,
    }));
  };


  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('image', formData.image);
    form.append('description', formData.description);
    form.append('category_id', formData.category_id);
    formData.intolerance_ids.forEach(id => {
      form.append('intolerances[]', id);
    });
    form.append('price', formData.price);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/products', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Manejar la respuesta de la API según sea necesario
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div>


      <form
        className="bg-beige-bg rounded-lg px-8 py-8 max-w-md mx-auto"
        action="http://127.0.0.1:8000/api/products"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer"
            placeholder=" "
            required
            onChange={handleChange} // Manejar cambios en el campo de nombre
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre de tu producto
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => {
              onSelectFile(e);
              handleFileChange(e);
            }}
            type="file"
            name="image"
            id="image"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          {selectedFile && (
            <div className="image-preview">
              <img src={preview} alt="Preview" className="preview-image" />
            </div>
          )}
          <label
            htmlFor="image"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Sube tu producto
          </label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <textarea
            type="textarea"
            name="description"
            id="description"
            maxLength="250"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer"
            placeholder=" "
            required
            onChange={handleDescriptionChange} // Manejar cambios en el campo de descripción
          />
          <label
            for="description"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Descripción
          </label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="category_id"
              id="category_id"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer"
              required
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Selecciona una opción
              </option>
              <option value="1">Magdalenas</option>
              <option value="2">Galletas</option>
              <option value="3">Tartas</option>
              <option value="4">Donuts</option>
              <option value="5">Croissants</option>
            </select>

            <label
              htmlFor="category_id"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Categoría
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <select
              name="intolerance_ids"
              id="intolerance_ids"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer"
              required
              onChange={handleIntoleranceChange}
              multiple  // Permitir selección múltiple
            >
              <option value="1">Sin Azúcar</option>
              <option value="2">Sin Gluten</option>
              <option value="3">Sin Lactosa</option>
              <option value="4">Sin Frutos Secos</option>
              <option value="5">Sin Huevo</option>
              <option value="6">Sin Fructosa</option>
            </select>
            <label
              htmlFor="intolerances"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Intolerancias
            </label>
            <label
              htmlFor="intolerance_id"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Intolerancias
            </label>
          </div>

        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="number" name="price" id="price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-granate-dark focus:outline-none focus:ring-0 focus:border-granate-dark peer" placeholder=" " required />
            <label for="price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-brown-letter peer-focus:dark:text-brown-letter peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Precio</label>
          </div>

        </div>

        <button
          type="submit"
          className="text-white bg-granate-light hover:bg-granate-dark focus:ring-4 focus:outline-none focus:ring-granate-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-granate-light dark:hover:bg-granate-dark dark:focus:ring-granate-light"
        >
          Guardar
        </button>
      </form>


    </div>
  )
}

export default AddForm