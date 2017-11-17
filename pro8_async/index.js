;(async () => {
 
    const file1 = await fetch('./file1.txt').then(res => res.text())
    const file2 = await fetch('./file2.txt').then(res => res.text())
    console.log(file1, file2)

    const file3 = await axios.get('./file1.txt').then(res => res.data)
    const file4 = await axios.get('./file2.txt').then(res => res.data)
    console.log(file3, file4)

})()
