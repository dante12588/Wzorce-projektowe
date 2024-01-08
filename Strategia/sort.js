// Interfejs strategii (w JavaScript reprezentowany jako klasa lub funkcja)
class SortStrategy {
    sort(array) {
        throw new Error("Ta metoda powinna być nadpisana");
    }
}

// Konkretne strategie
class BubbleSortStrategy extends SortStrategy {
    sort(array) {
        console.log("Sortowanie bąbelkowe");
        // Algorytm sortowania bąbelkowego
        // ...
        return array;
    }
}

class QuickSortStrategy extends SortStrategy {
    sort(array) {
        console.log("Sortowanie szybkie");
        // Algorytm sortowania szybkiego
        // ...
        return array;
    }
}

// Kontekst wykorzystujący strategie
class SortedList {
    constructor() {
        this.sortStrategy = null;
        this.array = [];
    }

    setSortStrategy(sortStrategy) {
        this.sortStrategy = sortStrategy;
    }

    add(item) {
        this.array.push(item);
    }

    sort() {
        if (this.sortStrategy === null) {
            throw new Error("Strategia sortowania nie została ustawiona");
        }
        this.sortStrategy.sort(this.array);
    }

    show() {
        console.log(this.array);
    }
}

// Użycie wzorca strategii
const sortedList = new SortedList();

sortedList.add(5);
sortedList.add(3);
sortedList.add(1);
sortedList.add(4);
sortedList.add(2);
sortedList.show();

sortedList.setSortStrategy(new BubbleSortStrategy());
sortedList.sort();

sortedList.setSortStrategy(new QuickSortStrategy());
sortedList.sort();
