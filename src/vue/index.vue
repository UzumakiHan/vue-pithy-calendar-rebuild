<template>
    <div>
        <div class="calendar">
            <div class="header">
                <div class="header-left">
                    <div>
                        <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA/NJREFUeF7t3NuNFDEQRmFvJhAKmexGAkTCZgKZQCjI0ow0QkuPL+Wq364zL7z0xa7z0Woe6JfCL/UEXlLvns0XACRHAAAAJJ9A8u3zBABA8gkk3z5PAAAkn0Dy7fMEAEDyCSTfPk8AACSfQPLt8wQAQPIJJN8+TwAAJJ9A8u3zBABA8gkk3z5PAAAkn0Dy7fMEAEDyCSTfPk8AAKSbwLdSynsp5U/gzj+VUl5LKXUtob9sT4Aft8HX+F+CENT4v2/Vv0cjyATgHv/+Ny4CwWP8+zpCEWQB8G/8CAQfxQ9HkAHA/+J7IriKH4rgdADP4nsgaIkfhuBkAK3xHxF8Nn4l74kfguBUAL3x6/Dfbv88tDIwEr++mFojvNzPiQCI30H4NADE74hfDz0JAPE7458EgPgD8U8BQPzB+CcAIP5E/N0BEH8y/s4AiG8Qf1cAxDeKvyMA4hvG3w0A8Y3j7wSA+Avi7wKA+Ivi7wCA+AvjqwMg/uL4ygCI7xBfFQDxneIrAiC+Y3w1AMR3jq8EgPgB8VUAED8ovgIA4gfGjwZA/OD4kQCILxA/CgDxReJHACC+UHxvAMQXi+8JgPiC8b0AEF80vgcA4gvHXw2A+OLxVwIg/gbxVwKo37/72jkD669l1Q80/Cyl1D9bfxFfDmtd25LjVv73cBAsSWZ70ZUA6kpBYNvL/GqrAYDAPJntBT0AgMC2menVvACAwDSb3cU8AYDArpvZlbwBgMAsnc2FIgCAwKadyVWiAIDAJN/8RSIBgGC+3/QVogGAYDrh3AUUAIBgruHU2SoAQDCVcfxkJQAgGO84fKYaABAMpxw7UREACMZaDp2lCgAEQzn7T1IGAIL+nt1nqAMAQXfSvhN2AACCvqZdR+8CAARdWdsP3gkACNq7Nh+5GwAQNKdtO3BHACBoa9t01K4AQNCU9/lBOwMAwfO+T4/YHQAInia+PuAEACCYQHAKABAMIjgJAAgGEJwGAASdCE4EAIIOBKcCGEGw4uMQIx+psP5QxiWHkwH0IKjx30opvzr+8rQe2oPg/baO1mtPH3c6gBYEK+PfA7UgcI9fF5cBwBUCj/gtCELiZwLwEQLP+FcIwuJnA/CIICL+RwhC42cEUPf8WkqpAFa88LW+lNV3grqO+hGt0F+Wd4DQISvfHADKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzWBgCHISvfAgDKdRzW9hfnRWqQKne5MwAAAABJRU5ErkJggg=="
                            alt=""
                            @click="prevYear"
                        >
                        <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABVVJREFUeF7tnd112zAMhUV6kWSTZJIkD/7ZIs0WivwQd5K4k9SL2OxhIx0rji1RBGkDxO1LHkpCBO4nioBoylT4pzoCRrX3cL4CAMohAAAAQHkElLuPGQAAKI+AcvcxAwAA5RFQ7j5mAACgPALK3ccMAACUR0C5+5gBAIDyCCh3HzMAAFAegQzur1arB+fck3PO/90ZY/5Ya7d1XW8zXI5kEjMAKXw/O8/n809jzMMFs29N0/xKfEmSOQBACt/3ziPi/2/snHtZr9ebhJclmQIApPB9dV6tVnf7/f5j4M7vX2XXNM19gssmMQEAiGH04h8Oh8+qqu5CTVlr7+u63oW2z9kOABCi6xd7rfiTrFhrH7ksCAHAJOmOjWPF9xaapmETdzYDidThJt3m8/mzMeYj8uJYA0QGjkW3xWLh07jX2MFwev57HzADTFAyJM0bMsfp2d+NEwAEAlCi+JgBAsSfmOOfs7iz1r5wWfWfDhAzwAAEMTl+35xzbrterx8DOLtZEwBwIfSUNM+blCA+HgHKxQcAZwAg5vjeIrs3fkPPFzwCetGh5vjc3vSFLCwAQBulUtO8MQgAQFVVWsVXvwYoPccfu/tVA6AhxwcASPNGGVC3BtBS4BlVvm2gCgBtOX4IBGoA0JjjAwDlOT4AUJ7jqwYAOX6I/IVuCaPm+FVVsdq4GSZlXKviFoFI86aBUBQAEH+a+EWVgpHjTxe/GACQ48eJXwQAml/lxst+7Cl6DQDx6QiIBAA5Pl34zoI4AJDjpxNf3BoAaV5a8UUBAPHTiy8GAGqOb4zZvL+/v+QJoWyr7NcAyPHzAsYaAKR5ecVn/QiA+PnFZwkAcvzrCM+2DkC889W8x0+FCas1wHK5/HDOPcc4J+X3+DG+5ezDBoC2wvc3xlmIHxO1rz7iAUCOHy8+NwCijl2VdiADTa70vdnMAN61xWLhIl18s9ZuuBzAHOnDTbpxAyD6FE6/DpjNZv44NhancN9EzYiLsgKgnQX8QjD46PUTn/2ZfP4kbkAQCAM7AFK87wcEgepzygJOh0wsCFXcDmUOl+S6LdnNAH33KYUhb0fiqV3XlZ9RHeCS49TXwUgTh5FiPQN0Q28heCIsDkUd3njNWUAEAG124FNEEgSoFfxESwwAfujtvkD/qZaoNBG1AuEAtBBM/kxb321A8B0CUTNAN3TUCtKtEkQC0LmPWgEdBNEAePdRK6BBIB6AXoYQ/Sk3zbWCIgBIlSZy+7Q77d4O610MAKkg0FYrKAoA1ArC7vp+q+IAQK1gGgRFApACAn9WoIZ9BcUCgFpB2ExQPACoFRTwOjiM5eFW2FdwPj4qZoDOdewrKOBtIHU2SAFBSbUCVTNA722i/xUS9hVw3hVMvdPH+lNfKZeyr0DlDIB9BcfbQzUAiWoFogtGAKClQOu+AgDQWyxorBUAgJPVYoo0UdK+AgBwJl1IAYGUWgEAuJAvavkNAgAYKBhoqBUAgJGKERUC7vsKAMBYybD9f+JvENjWCgBAIACl7isAABMA8E2ptQJuJ5cAgIkA9CCI+qk6t1NNAUAEAFQIOM0CACASAN8ttlbQ7jbeEi6drCsAIIYyJk0EAMSgc+s+EQJW3zTADJCQpsBaAasDqwBAQgACagWsxPfjBQCJAegWh/v9/tUY4w+zuvPfNDDG/K7rmsXCr+8yAMgAgCSTAECSWhnGCgAyBFWSSQAgSa0MYwUAGYIqySQAkKRWhrECgAxBlWQSAEhSK8NYAUCGoEoyCQAkqZVhrAAgQ1AlmQQAktTKMFYAkCGokkwCAElqZRgrAMgQVEkmAYAktTKM9R8qHPafEhdoKAAAAABJRU5ErkJggg=="
                         
                            alt=""
                            @click="prevMonth"
                        >
                    </div>
                    <div class="picker-date">
                        {{ year }}年{{ month }}月
                    </div>
                    <div>
                        <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABRRJREFUeF7tnV1a6jAQhpOyEdwJrkS9oLALZBcIF3pWojuRjdD4RNujIrTpJPDMz+etScnM93aSmaapd/gz7QFv2noY7wCAcQgAAAAw7gHj5iMCAADjHjBuPiIAADDuAePmIwIAAOMeMG4+IgAAMO4B4+YjAgAA4x4wbj4iAADg54HlcjkLIdyFEO6dc/sQwn4ymaw3m80bv9HKHhG7CFDX9aNzbnXGreuqql42m81ettv5jJ4VAPP5/N57/9znnhDC22QyeQAEZSBiBUBd1yHFLECQ4qW0NmwAWC6X06Zp3tOG/dlqX1XVLSLBCI+daMoJgFnTNK8jzQEEIx123Fw6AJ/2hBAedrvdS6YvTHZnA0D0fl3XcQqYEpVYb7fbmEHgb4QHWAHQrgPiNAAIRoiY05QVAG0UiHfxXQ4EqBWkI8EOgDj0WAlsmibWA0iRAGmicABaCGJaSJ4OAEEaBCwjQDf0AmsCpIkDHLAGoBv7fD5/9d7P0pj+0woQ9DhOBABx/IvF4rl9OkjiALWC024TA8CPDOHck8IUMFArOPKSKABKpYkoGH1TIA6AUhCgVvAFgUgAUCtIme3S2ogFALWCNIGHWokGoAQE1vcViAcAtYKhe7z//2oAQK2ABoIqAFArGA+BOgBKpYlWagUqASgFgYVagVoAUCtImw5UA1AiTdS+r0A9ACUg0FwrMAFAFwwzdx2r3FdgCgDUCv6uC8wBgFrBbwhMAlAqTdRQKzALQCkIpNcKTAOAWoHgDSFpZY60VrnbzyXXCsxHgA6RXAik1goAwFGQsFYrAAAnZglL7yAAgDPLhIHTylIWFyLeQQAAPVJagAAADNzLLQRqzysAAAnBXPN5BQAgAYASj5S51goAQCIAJSDgWCsAACMAKLSvgFV2AAAIAOTuK6iq6obLCacAgAhAzr6C9ohbFkffA4AMAKgVQwCQ4XQuXTPOLdpvt9sbLnYgAhCUyBA//hoWgQSfs+gSHxkfDofnnBPLON390amIAIloEb5n8OvKsRC02+1uE3/uas0AQIKr21Lw2G8Z/L8yV/ERAYyLDwAGAEj5iNXAJVgt+E6NFVPAGQWpOX53OSknkwKAEwBkpnmOU6FnaJYDAEcesiQ+1gA/xC+R41dVFT9oyaLGP3Tnd/9HBPj6Qkn2xyk45vgpEJgHQHOODwAGPGBdfNNrAAs5PiKA8RwfABjP8QGA8RwfALQesJrjAwDjOb55AJDmDSOgthAE8YfFV1sHQI6fJr5KAKw8x0+XuL+lqinA2qPcEhCoAQDi03AQDwByfJrwKvYDWH6Onyf7d2+xEQBpXhkERAIA8cuILzINRI5fTnxxAOSe2ydlr35ZiZXUAZDmXQYLEWsAiH8Z8dlPAcjxLyc8+zoAcvzLi882AiDNu474LAGA+NcTnx0AucewcDuA6bpS0n6NVRaQ8ywfOb5wAHLufknv49NkulwvNhGAOvdD/Dw4OAEQX9F+H2FO/Jq3uPfxR9h3laZsAIjWpn6yjfOxa1dRreCPcAPg0Tm36rMP4hdUn+NJoX0fafLevzw9PT2UdYHtq7GKAJ0UcUF4OBxW3vupc24ahffe/5N2/o4EtFgCIMFxWsYIALQoSbQDABAdp6UbANCiJNEOAEB0nJZuAECLkkQ7AADRcVq6AQAtShLtAABEx2npBgC0KEm0AwAQHaelGwDQoiTRDgBAdJyWbgBAi5JEOwAA0XFaugEALUoS7fgA94Ulrr+K8jIAAAAASUVORK5CYII="
                            alt=""
                            @click="nextMonth"
                        >
                        <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA9dJREFUeF7t3O1pHDEQgGG5k6QTpxOnkriTkEqcTuJSwoAXm8Pnk25nNF/vQcifRSfN+7DsBbIPg0/rCTy0Pj2HHwBojgAAAGg+gebH5w4AgOYTaH587gAAaD6B5sfnDgCA5hNofnzuAABoPoHmx+cOAIDmE2h+fO4AAGg+gebH5w4AgOYTaH587gAAaD6B5sfnDgCA5hNofnzuAAAIMYHfY4yfzjt5HGPIn2fnfWz9+gh3gJe3wb+OMb5vPf37l0l42Yfs4U8nBN4AjvhHCg8ER/yPe2iDwBPAZXwPBJfx2yHwAnAt/k4E1+K3QuAB4Fb8HQhuxW+DYDcAedp/WnjQs3gm+DbG+Le4h7LPBLsByPDlDiB/z34sEMhPvV+zG6j862A3AJk5CBbkWV/qAQAE1lUX1vcCAIKFSJaXegIAgWXZybW9AYBgMpTVZREAgMCq7sS6UQCAYCKWxSWRAIDAovCNNaMBAMFmBBEBgGAjgqgAQLAJQWQAINiAIDoAEBgjyAAABIYIsgAAgRGCTABAYIAgGwAQKCPICAAEigiyAgCBEoLMAECggCA7ABCcRFABAAhOIKgCAAR3IqgEAAR3IKgGAASLCCoCAMECgqoAQDCJoDIAEEwgqA4ABDcQdAAAgi8QdAEAgisIOgEAwScIOgJYeTuIjOzvGOPHxPPUyiWrb0qRtWUPshfVTycAq6+GKR9fDtgFAPEbPwMQv/GvAOI3/ncA4k88LlZ9BiD+RPyqD4HEn4xfEQDxF+JXA0D8xfiVABD/jvhVABD/zvgVABD/RPzsAIh/Mn5mAMRXiJ8VAPGV4mcEQHzF+NkAEF85fiYAxDeInwUA8Y3iZwBAfMP40QEQ3zh+ZADE3xA/KgDib4ofEQDxN8aPBoD4m+NHAkB8h/hRABDfKX4EAMR3jO8NgPjO8T0BED9AfC8AxA8S3wMA8QPF9wDwMsZ4XJiBxcsZ5PtlHysfk5czrGzA6trd/zdQ7gDydowZBBbxjzk+ve1jZq5l43vcAeQ7ZxBYxl9BUDq+F4BbCHbEn0FQPr4ngGsIdsb/CkGL+N4ALhF4xP8MQZv4EQAcCOSh7HnmiczwGtnDq8Wr2Az3fHrp3b8CTm+YBXQnAADdeaZbDQDpkuluGAC680y3GgDSJdPdMAB055luNQCkS6a7YQDozjPdagBIl0x3wwDQnWe61QCQLpnuhgGgO890qwEgXTLdDQNAd57pVgNAumS6GwaA7jzTrQaAdMl0NwwA3XmmWw0A6ZLpbhgAuvNMtxoA0iXT3TAAdOeZbjUApEumu2EA6M4z3Wr/AWBKZJBbYsbwAAAAAElFTkSuQmCC"
                           
                            alt=""
                            @click="nextYear"
                        >
                    </div>
                </div>
                <img
                    src="data:image/png;base64,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"
                    alt=""
                    class="header-right"
                    @click="nowDate"
                >
            </div>

            <div class="content">
                <div class="picker-weeks">
                    <div>日</div>
                    <div>一</div>
                    <div>二</div>
                    <div>三</div>
                    <div>四</div>
                    <div>五</div>
                    <div>六</div>
                </div>
                <div class="picker-days">
                    <div
                        v-for="(item, index) in days"
                        :key="index"
                        :class="[
                            isCur(item).day ? 'is-today' : '',
                            !isCur(item).month ? 'other-month' : '',
                            isCur(item).select ? 'is-select' : ''
                        ]"
                        @click="clickDay(item)"
                    >
                        {{ item.getDate() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VuePithyCalendar',
    data() {
        return {
            year: '',
            month: '',
            days: [],
            day: '',
            activeDay: '',
            showDate: null,
            date: new Date(),
            chooseDay: '',
        };
    },
    mounted() {
        this.nowDate();
    },

    methods: {
        /**
         * 根据传入的日期对象，获得包含年、月、日索引的普通对象
         * @param {Data} date - 日期对象
         * @return {Object} - 返回包含年、月、日索引的普通对象
         */
        getYearMonthDay(date) {
            // console.log(date);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            return {
                year: year,
                month: month,
                day: day
            };
        },
        /**
         * 获取渲染日历面板显示日期的数组
         * @return {Array} - [new Date(...), new Date(...)],日历面板根据该数组进行渲染
         */
        getShowDays() {
            const arr = [];
            const firstDay = new Date(this.showDate.year, this.showDate.month, 1); // 获取本月第一天的日期对象：
            const firstDayWeek = firstDay.getDay(); // 根据第一天的日期对象，获取本月的第一天是周几
            const startDay = Number(firstDay) - firstDayWeek * 24 * 60 * 60 * 1000; // 获取本月日历起始日期
            for (let i = 0; i < 42; i++) {
                const day = new Date(startDay + i * 24 * 60 * 60 * 1000);
                arr[i] = day;
            }
            return arr;
        },
        /**
         * 判断传入的日期对象是展示日期的月份、是否为当天、是否为被选择的那一天
         * @param {Data} date - 日期对象
         * @return {Object} - 包含判断结果的值
         */
        isCur(date) {
            // 获取传入日期对象的年、月、日
            const year = this.getYearMonthDay(date).year;
            const month = this.getYearMonthDay(date).month;
            const day = this.getYearMonthDay(date).day;

            // 获取当前展示日期的年、月
            const showDate = this.showDate;
            const showYear = showDate.year;
            const showMonth = showDate.month;

            // 获取今天的年、月、日
            const curDate = this.getYearMonthDay(new Date());
            const curYear = curDate.year;
            const curmonth = curDate.month;
            const curDay = curDate.day;

            // 获取选择日期的年、月、日
            const chooseDate = this.getYearMonthDay(new Date(this.chooseDay));
            const chooseYear = chooseDate.year;
            const chooseMonth = chooseDate.month;
            const chooseDay = chooseDate.day;

            return {
                month: year === showYear && month === showMonth, // 判断当前日期是否为本月，需要年月都相同
                day: year === curYear && month === curmonth && day === curDay, // 判断当前日期是否为今天，需要年月日都相同
                select: year === chooseYear && month === chooseMonth && day === chooseDay // 判断当前日期是否为选择的那天，需要年月日都相同
            };
        },
        /**
         * 获取当前选择的日期
         * @param {Date|Object} date
         * @return {String} 如 2020-4-26
         */
        getChooseDay: function (date) {
            if (date instanceof Date) {
                return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            } else {
                return `${date.year}-${date.month + 1}-${date.day}`;
            }
        },
        // 点击日期
        clickDay(day) {
            this.showDate = this.getYearMonthDay(day);
            this.year = this.showDate.year;
            this.month = this.showDate.month + 1;
            this.days = this.getShowDays();
            this.chooseDay = this.getChooseDay(this.showDate); // 获取选择的日期
            this.$emit('chooseDay', this.chooseDay);
            // console.log(this.chooseDay);
        },
        // 上一年
        prevYear() {
            this.year -= 1; // 更改显示日期的year
            const chooseDate = `${this.year}-${this.month}-${this.day}`;
            this.SameCode(chooseDate);
        },
        // 上一个月
        prevMonth() {
            this.month -= 1; // 更改显示日期的year
            if (this.month === 1) {
                // this.month = 1;
                this.month = 12;
                this.prevYear();
            } else {
                const chooseDate = `${this.year}-${this.month}-${this.day}`;
                this.SameCode(chooseDate);
            }
        },
        // 下一个月
        nextMonth() {
            this.month += 1; // 更改显示日期的year
            if (this.month > 12) {
                this.month = 1;
                this.nextYear();
            } else {
                const chooseDate = `${this.year}-${this.month}-${this.day}`;
                this.SameCode(chooseDate);
            }
        },
        // 下一年
        nextYear() {
            this.year += 1; // 更改显示日期的year
            const chooseDate = `${this.year}-${this.month}-${this.day}`;
            this.SameCode(chooseDate);
        },
        //
        SameCode(chooseDate) {
            this.showDate = this.getYearMonthDay(new Date(chooseDate));
            this.days = this.getShowDays();
        },
        // 今天
        nowDate() {
            this.showDate = this.getYearMonthDay(this.date);
            this.year = this.showDate.year;
            this.month = this.showDate.month + 1;
            this.day = this.showDate.day;

            this.days = this.getShowDays();
            this.chooseDay = this.getChooseDay(this.showDate);
        }
    }
};
</script>

<style lang="scss" scoped>
.calendar {
    width: 322px;
    height: 329px;
    margin-top: 5px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    user-select: none;
    .header {
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 20px;
        padding-right: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-left{
            display: flex;
            align-items: center;
            // margin-right: 10px;

        }
        img{
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
        .picker-date{
            font-size: 14px;
            margin: 0px 38px;
        }
    }
    .content {
        padding: 0 10px 10px 10px;
        color: #606266;
        .picker-weeks {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ebeef5;
            div {
                float: left;
                width: 30px;
                height: 30px;
                margin: 4px 6px;
                line-height: 30px;
                text-align: center;
                font-size: 14px;
            }
        }
        .picker-days {
            div {
                float: left;
                width: 30px;
                height: 30px;
                margin: 4px 6px;
                line-height: 30px;
                text-align: center;
                font-size: 12px;
                cursor: pointer;
                &:hover {
                    color: #409eff;
                }
                &.is-today {
                    color: #409eff;
                    font-weight: 700;
                }
                &.is-select {
                    border-radius: 50%;
                    background-color: #409eff;
                    color: #fff;
                }
                &.other-month {
                    color: #c0c4cc;
                }
            }
        }
    }
}
</style>
