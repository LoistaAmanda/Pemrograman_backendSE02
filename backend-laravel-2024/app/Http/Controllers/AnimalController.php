<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller {

    private $animals = ['Kucing', 'Anjing', 'Kelinci', 'kelomang', 'kura-kura'];

    public function index() {
        return response()->json(['berikut merupakan tampilan array dari animals' =>  $this->animals ]);
    }

    public function store(Request $request)
     {
        $request->validate([
            'name' => 'required|string',
        ]);
        array_push($this->animals, $request->name);
        
        return response()->json(['Pesan dari API' => 'Berhasil Menambahkan Hewan', 'animals' => $this->animals]);
    }

    public function update(Request $request, $id) {
        
        $request->validate([
            'name' => 'required|string',
        ]);

       if (isset($this->animals[$id])) {
            $this->animals[$id] = $request->name;
            return response()->json(['Pesan dari API' => 'nama Hewan berhasil diperbarui!', 'animals' => $this->animals]);
        } else {
            return response()->json(['Pesan dari API' => 'nama Hewan tidak ditemukan!'], 404);
        }
    }

    public function destroy($id) 
    {
         if (isset($this->animals[$id])) {
            unset($this->animals[$id]);
            $this->animals = array_values($this->animals);
            return response()->json(['Pesan dari API' => 'Hewan berhasil dihapus!', 'animals' => $this->animals]);
        } else {
            return response()->json(['Pesan dari API' => 'Hewan tidak ditemukan!'], 404);
        }
    }
}
