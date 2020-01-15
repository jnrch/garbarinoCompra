const assert = require('assert')

describe('garbarino.com page', () => {
    it('Debe tener el titulo correcto', () => {
        browser.url('https://garbarino.com')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Garbarino - Tecnología, Electrodomésticos y Artículos para el hogar')
    }) 
      it('Debe buscar “Heladeras”', () => {
      browser.url('https://garbarino.com');
      //esta anda
      const searchInput = $('#autocomplete-input')
     

      searchInput.setValue('Heladeras')  
      var myButton = $('.gb-search-dropdown');
      myButton.click()
      
      const searchDropdown = $('.gb-search-dropdown-list-category')
            searchDropdown.click();
      browser.pause(1500)

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


             browser.pause(3500)
     })

   //Seleccionamos como opcion de obtener el producto como 'retiro'
     it('Seleccionar opcion de retiro', () => {
     
       const selectRetiro = $('.gb-checkout-delivery-popup-success')
             selectRetiro.click()

     })

    //Seleccionamos la sucursal donde se va retirar
     it('Seleccionamos retiro en sucursal', () => {
     
       const selectTramo = $('.sucursal-ul-list')
             selectTramo.click()

             browser.pause(3500)  

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
            //alert('estamos en la seccion de datos del cliente')

     })


   //Llenar los inputs con los datos del cliente
     it('Datos del titular del medio de pago', () => {
     
        const   firstName = $('#firstName')
              , lastName = $('#lastName')
              , documento = $('#id_value')
              , diaNacimiento = $('#day_select')
              , mesNacimiento = $('#month_select')
              , anioNacimiento = $('#year_select')
              , selectGenero = $('.item-genero')
              , codigoArea = $('#codphone')
              , numeroTelefono = $('#phone')
              , email = $('#email')
              , calle = $('#street_name')
              , altura = $('#street_number')
              , piso = $('#floor')
              , apartamento = $('#room')
              , codigoPostal = $('#zip_code')
              , aceptoTerminos = $('.acepto-terminos')

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
              altura.setValue('3446')
              piso.setValue('2')
              apartamento.setValue('D')
              codigoPostal.setValue('1417')
              selectGenero.click()
              aceptoTerminos.click()


   //mantener pausado el navegar para visualizar los resultados
         browser.pause(5000)

     })

         //Seleccionamos el form metodos de pago
     it('Seleccionamos el form datos del cliente', () => {
     
        var pasarToto = $('#facturacion')
            pasarToto.click()


            browser.pause(5000)

     })

     it('Presionamos el boton continuar', () => {
     
        var pasarButton2 = $('#continue')
            pasarButton2.click()

            browser.pause(5000)

     })

        //Llenar los inputs de los datos de la tarjeta 
   /* it('Datos de la tarjeta', () => {
     
        const   mesVencimiento = $('#card_expiration_month')
              , anioVencimiento = $('#card_expiration_year')
              , codigoSeguridad = $('#security_code')

              //numeroTarjeta.setValue('1234567890123456')
              mesVencimiento.setValue('07')
              anioVencimiento.setValue('20')
              codigoSeguridad.setValue('123')


   //mantener pausado el navegar para visualizar los resultados
         browser.pause(20000)

     })*/

})



