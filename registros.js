/**
 * Created by ldcardona on 6/10/2016.
 */


$(function () {


    var $tbody=$("#tabla").find('.tbody');


        $('.add').click(function (ev) {

            $tbody.append($template);

        });




    function eliminar() {
        var $eliminar = $("#tabla").find('.fila');
        $eliminar.remove()

    }

    $('.close').click(function (ev) {
        eliminar();
    });




 var $template=`<tr class="fila">
        <td >
        <div class="input-field ">
    <!--class="validate"-->
        <input id="nombre" type="text" >
        </div>
        </td>
        <td>
        <div class="input-field ">
        <input id="apellido" type="text" >
        </div>
        </td>
        <td>
        <div class="input-field ">
        <input id="documento" type="text">
        </div>
        </td>
        <td>
        <div class="input-field ">
        <input id="nacimiento" type="text" >
        </div>
        </td>
        <td>
        <div class="input-field ">
        <input id="telefono" type="text" >
        </div>
        </td>

        </tr>`;

    });













