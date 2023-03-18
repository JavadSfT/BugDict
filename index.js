let tbody = document.querySelector('tbody')


fetch('./repo/BugDict.json')
    .then(obj => {
        return obj.json()
    })
    .then(item => {

   
        for (let i = 0; i < item.length; i++) {

            let tr = document.createElement('tr')

            let td1 = document.createElement('td')
            td1.innerHTML = i + 1
            tr.appendChild(td1)

            let td2 = document.createElement('td')
            td2.innerHTML = item[i].language
            tr.appendChild(td2)

            let td3 = document.createElement('td')
            switch (item[i].type) {
                case 1:
                    td3.innerHTML = "bug"
                    break
                case 2:
                    td3.innerHTML = "feture"
            }
            tr.appendChild(td3)

            let td4 = document.createElement('td')
            let a = document.createElement('a')
            a.innerHTML = item[i].problem

            a.href = `problem/index.html?problem=${i+1}`

            td4.appendChild(a)
            tr.appendChild(td4)

            let td5 = document.createElement('td')
            td5.innerHTML = item[i].date
            tr.appendChild(td5)

            tbody.appendChild(tr)
        }

    })