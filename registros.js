/**
 * Created by ldcardona on 6/10/2016.
 */

$(function () {

    var $tbody=$("#tabla").find('.tbody');


    $('.add').click(function (ev) {
        $tbody.append($template);
    });

    function eliminar() {
        var $eliminar = $("#tabla").find('.fila' );
        $eliminar.remove()
    }

    function eliminarRegistros(){
        var $eliminarRegistros=$('.guardar .save' );
        $eliminarRegistros.remove();

    }

    $('.close').on('click', function (ev) {
        eliminar();
        eliminarRegistros();
        g.removeClass('borde');
    });

    var $template=`<tr class="fila">
                        <td >
                            <div class="input-field ">
                                <!--class="validate"-->
                                <input id="nombre" class="nombre" type="text" >
                            </div>
                        </td>
                        <td>
                            <div class="input-field ">
                                <input id="apellido" class="apellido" type="text" >
                            </div>
                        </td>
                        <td>
                            <div class="input-field ">
                                <input id="documento" class="documento" type="text">
                            </div>
                        </td>
                        <td>
                            <div class="input-field ">
                                <input id="nacimiento" class="nacimiento" type="text" >
                            </div>
                        </td>
                        <td>
                            <div class="input-field ">
                                <input id="telefono" class="telefono" type="text" >
                            </div>
                        </td>
                    </tr>`;

    var guardar=
        `<div class="save">
            <div class="col s3 name  ">:nombre:</div>
            <div class="col s2 lastname ">:apellido:</div>
            <div class="col s2 ni ">:ni:</div>
            <div class="col s2 nacimiento">:nacimiento:</div>
            <div class="col s2 telefono ">:telefono:</div>
        </div>`;

    var vector=[];
    var obj={};


    var save=$('.save');
    var g=$('.guardar')

    save.on('click', function (ev) {

        var $nombre=$('.tbody').find('.nombre').val();
        var $apellido=$('.tbody').find('.apellido').val();
        var $nacimiento=$('.tbody').find('.nacimiento').val();
        var $telefono=$('.tbody').find('.telefono').val();
        var $ni=$('.tbody').find('.documento').val();
        obj.nombre= $nombre;
        obj.apellido= $apellido;
        obj.ni= $ni;
        obj.nacimiento= $nacimiento;
        obj.telefono= $telefono;
        vector.push(obj);
        var datos=guardar
            .replace(':nombre:', $nombre)
            .replace(':apellido:', $apellido)
            .replace(':ni:', $ni)
            .replace(':nacimiento:', $nacimiento)
            .replace(':telefono:', $telefono)

        var $guardar = $(datos)
        g.append($guardar.fadeIn(2000));

        g.addClass('borde');

    });

    });

















