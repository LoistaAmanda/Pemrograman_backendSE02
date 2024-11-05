<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function show($id)
    {
        // Search for the student by id
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get detail student',
                'data' => $student,
            ];

            // Return JSON data and 200 status code
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
            ];

            // Return JSON data and 404 status code
            return response()->json($data, 404);
        }
    }

    public function index()
    {
        $students = Student::all();
        
        $response = [
            'message' => 'Success Showing All Students Data',
            'data' => $students
        ];

        return response()->json($response, 200);
    }

    public function store(Request $request)
    {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $response = [
            'message' => 'Successfully created new student',
            'data' => $student
        ];
       
        return response()->json($response, 201);
    }

    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($id);
        $student->update($request->all());
        
        $response = [
            'message' => 'Student updated successfully',
            'data' => $student
        ];
        
        return response()->json($response, 200);
    }

    public function destroy($id)
    {
        $student = Student::find($id);

        if ($student) {
            $student->delete();
            return response()->json(['message' => 'Student deleted successfully'], 204);
        } else {
            return response()->json(['message' => 'Student not found'], 404);
        }
    }
}