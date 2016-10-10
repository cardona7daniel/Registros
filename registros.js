/**
 * Created by ldcardona on 6/10/2016.
 */
var cont=0, i=0;
var vector=[];
var obj={};

$(function () {

    var $tbody = $("#tabla").find('.tbody');


    $('.add').click(function (ev) {
        cont++;
        var datos2=$template
            .replace(':cont:', cont )
            .replace(':nom:', cont )
            .replace(':ap:', cont )
            .replace(':doc:', cont )
            .replace(':nac:', cont )
            .replace(':tel:', cont )

        $tbody.append(datos2);

    });

    // function eliminar() {
    //     var $eliminar = $("#tabla").find('.fila' );
    //     $eliminar.remove()
    // }

    // function eliminarRegistros(){
    //     var $eliminarRegistros=$('.guardar .save' );
    //     $eliminarRegistros.remove();
    // }

    // $('.close').on('click', function (ev) {
    //     eliminar();
    //     // eliminarRegistros();
    //     // g.removeClass('borde');
    // });

    var save = $('.save');
    var g = $('.guardar')


        save.on('click', function (ev) {
            for(var j=1; j<=cont; j++) {
                i++;
                var $nombre=$('.tbody').find('.nombre'+ i).val();
                var $apellido=$('.tbody').find('.apellido'+ i).val();
                var $nacimiento=$('.tbody').find('.nacimiento'+ i).val();
                var $telefono=$('.tbody').find('.telefono'+ i).val();
                var $ni=$('.tbody').find('.documento'+ i).val();
                // obj.nombre= $nombre;
                // obj.apellido= $apellido;
                // obj.ni= $ni;
                // obj.nacimiento= $nacimiento;
                // obj.telefono= $telefono;
                // vector.push(obj);
                var datos=guardar
                    .replace(':nombre:', $nombre)
                    .replace(':apellido:', $apellido)
                    .replace(':ni:', $ni)
                    .replace(':nacimiento:', $nacimiento)
                    .replace(':telefono:', $telefono)

                 var $guardar = $(datos)
                g.append($guardar.fadeIn(2000));

                g.addClass('borde');
            }
        });


    var $template = `<tr class="fila:cont:">
                        <td >
                            <div class="input-field ">
                                <!--class="validate"-->
                                <input id="nombre" class="nombre:nom:" type="text" >
                            </div>
                        </td>
                        <td>
                            <div class="input-field ">
                                <input id="apellido" class="apellido:ap:" type="text" >
                            </div>
                        </td>
                        <td>
                            <div class="input-field ">
                                <input id="documento" class="documento:doc:" type="text">
                            </div>
                        </td>
                        <td>
                            <div class="input-field ">
                                <input id="nacimiento" class="nacimiento:nac:" type="text" >
                            </div>
                        </td>
                        <td>
                            <div class="input-field ">
                                <input id="telefono" class="telefono:tel:" type="text" >
                            </div>
                        </td>
                    </tr>`;

    var guardar =
        `<div class="save">
            <div class="col s3 name  ">:nombre:</div>
            <div class="col s2 lastname ">:apellido:</div>
            <div class="col s2 ni ">:ni:</div>
            <div class="col s2 nacimiento">:nacimiento:</div>
            <div class="col s2 telefono ">:telefono:</div>
        </div>`;



    });

















