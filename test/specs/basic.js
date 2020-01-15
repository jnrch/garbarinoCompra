const assert = require('assert')

describe('garbarino.com page', () => {
    it('Debe tener el titulo correcto', () => {
        browser.url('https://garbarino.com')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Garbarino - Tecnología, Electrodomésticos y Artículos para el hogar')
    }) 
      it('Debe buscar “Heladeras con Freezer”', () => {
      browser.url('https://garbarino.com');
      //esta anda
      const searchInput = $('#autocomplete-input')
     

      searchInput.setValue('TV LED y Smart TV')  
      //var myButton = $('.gb-search-dropdown');
      //myButton.click()
      const searchDropdown = $('.gb-search-dropdown-list-category')
            searchDropdown.click();

    })

    //seleccionar el primer item de la busqueda
     it('Seleccionar el primer articulo de la busqueda', () => {

          const firstBox = $('.itemBox')
                firstBox.click();

        })
    //Hacer Click en el boton comprar
     it('Hacer clic en el boton de comprar', () => {

           var comprarButton = $('#purchaseButton')
               comprarButton.click()

     })

    //Hacer Click en el boton continuar
     it('Hacer clic en el boton para continuar', () => {

       var continuarButton = $('#cart-buy-btn')
           continuarButton.click()

     })

    //buscamos el barrio o localidad Villa del Parque, Buenos Aires, Ciudad de Buenos Aires
     it('Hacer busqueda de barrio o localidad para retiro o envío', () => {

       const searchBarrio = $('#c1ty')
             searchBarrio.setValue('Villa del Parque, Buenos Aires, Ciudad de Buenos Aires')

     })
     
      //Seleccionamos el barrio o localidad Villa del Parque, Buenos Aires, Ciudad de Buenos Aires
     it('Seleccionamos el barrio de villa del parque', () => {
     
       const searchBarriod = $('.gb-suggestion')
             searchBarriod.click();

     })

    //Seleccionamos el barrio o localidad Villa del Parque, Buenos Aires, Ciudad de Buenos Aires
     it('Seleccionamos retiro en sucursal', () => {
     
       const selectTramo = $('.sucursal-ul-list')
             selectTramo.click()

     })
   //Presionamos el boton continuar un a vez confirmada la dirección de retiro
     it('Presionamos el boton continuar luego de confirmada la dirección de retiro', () => {
     
       var continuarConfirmarButton = $('#continue-pickup')
           continuarConfirmarButton.click()

     })

   //Seleccionamos el medio de pago
     it('Seleccionamos el medio de pago', () => {
     
       const selectMedioPago = $('#gb-tarjeta-visa-debito')
             selectMedioPago.click()

     })
    //Seleccionamos el form metodos de pago
     it('Seleccionamos el form metodos de pago', () => {
     
        var pasarToto = $('#metodos-pago')
            pasarToto.click()


            browser.pause(5000)

     })

     //Presionamos el boton continuar
     it('Presionamos el boton continuar', () => {
     
        var pasarButton = $('#continue')
            pasarButton.click()

            browser.pause(5000)

     })

   //Llenar los inputs con los datos del cliente
     it('Datos del titular del medio de pago', () => {
     
        const   firstName = $('#firstName')
              , lastName = $('#lastName')
              , documento = $('#id_value')
              , diaNacimiento = $('#day_select')
              , mesNacimiento = $('#month_select')
              , anioNacimiento = $('#year_select')
              //, selectGenero = $('#masculino')
              , codigoArea = $('#codphone')
              , numeroTelefono = $('#phone')
              , email = $('#email')
              , calle = $('#street_name')
              , altura = $('#street_number')
              , piso = $('#floor')
              , apartamento = $('#room')
              , codigoPostal = $('#zip_code')

              firstName.setValue('Jonathan')
              lastName.setValue('Rojas')
              documento.setValue('95562097')
              diaNacimiento.selectByAttribute('value', '31');
              mesNacimiento.selectByAttribute('value', '01'); // 01 es enero
              anioNacimiento.selectByAttribute('value', '1990'); // año 1990
              codigoArea.setValue('11')
              numeroTelefono.setValue('69068083')
              email.setValue('jonathanrojas31@gmail.com')
              calle.setValue('Cuenca')
              piso.setValue('2')
              apartamento.setValue('D')
              codigoPostal.setValue('1417')


              //selectGenero.isSelected();

              //diaNacimiento.setValue('31')


   //mantener pausado el navegar para visualizar los resultados
         browser.pause(20000)

     })
})



