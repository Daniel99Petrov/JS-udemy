document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  let counter = 1;
  let rows = text.split('\n');
    rows.forEach(r => {
        const lowered = r.toLowerCase().trim();
        const[first,second] = lowered.split('_');
        const secondCamel = second[0].toUpperCase() + second.slice(1);
        let camelC = first + secondCamel;
        camelC = `${camelC.padEnd(30)}${'a'.repeat(counter)}`;
        counter++;
        console.log(camelC);

    })
})