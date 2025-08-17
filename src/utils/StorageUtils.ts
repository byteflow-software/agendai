type DayInfo = {
  active: boolean;
  day: number;
  dayDate: string;
  dayName: string;
};

type MonthInfo = {
  month: string;
  days: DayInfo[];
};

class StorageUtils {
  static capitalize(str: string) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  static getDaysOfNextThreeMonths(): MonthInfo[] {
    const result: MonthInfo[] = [];
    const today = new Date();
    // zera horas para evitar possíveis problemas de fuso/DST ao formatar
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 3; i++) {
      // targetMonthDate = primeiro dia do mês alvo (já trata overflow de mês/ano)
      const targetMonthDate = new Date(
        today.getFullYear(),
        today.getMonth() + i,
        1
      );
      const monthDays: DayInfo[] = [];

      // se for o primeiro mês, começamos do dia atual; senão do dia 1 do mês alvo
      const startDate =
        i === 0
          ? new Date(today)
          : new Date(
              targetMonthDate.getFullYear(),
              targetMonthDate.getMonth(),
              1
            );

      // garante que startDate esteja mesmo no mês alvo (caso hoje seja dia 31 e tal)
      if (startDate.getMonth() !== targetMonthDate.getMonth()) {
        startDate.setFullYear(
          targetMonthDate.getFullYear(),
          targetMonthDate.getMonth(),
          1
        );
      }

      // itera dia a dia enquanto estivermos no mês alvo
      const iter = new Date(startDate);
      iter.setHours(0, 0, 0, 0);
      while (iter.getMonth() === targetMonthDate.getMonth()) {
        const weekday = this.capitalize(
          iter.toLocaleString("pt-BR", { weekday: "short" })
        ).replace(".", "");

        monthDays.push({
          day: iter.getDate(),
          // usa toLocaleDateString para evitar horário/segundos
          dayDate: `${weekday} - ${iter.toLocaleDateString("pt-BR")}`,
          dayName: weekday,
          active: false,
        });

        iter.setDate(iter.getDate() + 1);
      }

      const monthName = targetMonthDate.toLocaleString("pt-BR", {
        month: "long",
      });
      result.push({
        month: this.capitalize(monthName),
        days: monthDays,
      });
    }

    return result;
  }
}

export default StorageUtils;
