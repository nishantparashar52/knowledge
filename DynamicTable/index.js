function CreateTable({row= 5, column= 4}) {
    this.row = row;
    this.column = column;
    this.createSkeleton = () => {
        let counter = 1;
        for(let i = 0; i< this.row; i++) {
            for(let j = 0; j< this.column; j++) {
                let td = document.createElement('td');
                td.innerText = counter;
                counter++;

            }
        }
    }
}

CreateTable({row: 4, column: 5}).createSkeleton();