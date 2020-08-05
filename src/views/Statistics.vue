<template>
    <div class="flex-col">
        <div>
            A. Good {{calculatePercentage(answerA)}} - {{answerA}} results
        </div>
        <div>
            B. Fair {{calculatePercentage(answerB)}} - {{answerB}} results
        </div>
        <div>
            C. Neutral {{calculatePercentage(answerC)}} - {{answerC}} results
        </div>
        <div>
            D. Bad {{calculatePercentage(answerD)}} - {{answerD}} results
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            answerA: 0,
            answerB: 0,
            answerC: 0,
            answerD: 0,
            total: 0
        }
    },
    methods: {
        calculatePercentage(answer) {
            return `${(answer / this.total) * 100}%`
        }
    },
    created() {
        this.axios.get('/quiz/answers/statistics')
            .then(response => {
                const data = response.data;
                this.answerA = data[0].A;
                this.answerB = data[0].B;
                this.answerC = data[0].C;
                this.answerD = data[0].D;
                this.total = data[0].total;
            }).catch(error => {
                console.error(error);
            })
    }
}
</script>