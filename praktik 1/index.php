<?php

class Animal
{
    public $animals;

    public function __construct($data)
    {
        $this->animals = $data;
    }

    public function index()
    {
        foreach ($this->animals as $animal) {
            echo $animal . "<br>";
        }
    }

    public function store($data)
    {
        array_push($this->animals, $data);
    }

    public function update($index, $data)
    {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $data;
        } else {
            echo "Index tidak ditemukan.<br>";
        }
    }

    public function destroy($index)
    {
        if (isset($this->animals[$index])) {
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals);
        } else {
            echo "Index tidak ditemukan.<br>";
        }
    }
}

$animal = new Animal(['Kucing', 'Anjing', 'Ikan']);

echo "Index - Menampilkan seluruh hewan <br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru <br>";
$animal->store('Burung');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan <br>";
$animal->update(0, 'Kucing Anggora');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan <br>";
$animal->destroy(1);
$animal->index();
echo "<br>";
