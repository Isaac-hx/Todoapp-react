export default function Header() {

    const getCalender = new Date()
    const month = ['January','February','March','April','May','Juny','July','August','October,','November','December']
    const getToday = {
        date : getCalender.getDate(),
        month : month[getCalender.getMonth()],
        year : getCalender.getFullYear()

    }


    return (
    <div role="header-todo" className={`flex justify-between `}>
      <h1 className={`font-semibold text-4xl text-slate-700`}>Todo</h1>

      <div className={`flex items-center gap-2`}>

        <div>
            <h2 className={`font-semibold text-lg text-slate-700 text-right`}>Today</h2>
            <p className={`text-sm text-slate-600`}> {getToday.date} {getToday.month} {getToday.year}</p>
        </div>
        <ion-icon className="stroke-zinc-100" size="large" name="calendar-clear-sharp"></ion-icon>
      </div>

    </div>
  );
}
