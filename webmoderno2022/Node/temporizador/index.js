// Agendando Tarefas com o node-schedule

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){
    /* Explicando a string do scheduleJob:
       O primeiro * => São os segundos
       O segundo  * => São os minutos
       O terceiro * => São as horas
       O quarto   * => São os dias (1 - 31)
       O quinto   * => São os meses (1 - 12)
       O sexto    * => São os dias da semana (0 - 7) (Sendo que 0 e 7, são o mesmo que Domingo)

       O asterisco(*) e a barra(/) antes do número 5, significa que é para acontecer
       de 5 em 5 segundos, se estivesse só o 5, iria acontecer só no segundo 5 de cada minuto
    */
    console.log(`Executando Tarefa1: ${new Date().getSeconds()}`)
})

setTimeout(function(){
    tarefa1.cancel() // Use o .cancel() para parar uma tarefa
    console.log('Cancelando a Tarefa1...')
}, 25000)

// Criando uma regra:
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 7)]
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executou a Tarefa 2!')
})

setTimeout(function(){
    tarefa2.cancel() // Use o .cancel() para parar uma tarefa
    console.log('Cancelando a Tarefa2...')
}, 120000)

/* É possível também usar o recurso do JS "setInterval" para criar temporizador,
   mas o node-shedule facilita o trabalho */