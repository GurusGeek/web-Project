#include <iostream>
#include <string>
#include <cstring>

using namespace std;


const int MAX_SECTIONS = 5;
const int MAX_STUDENTS_PER_SECTION = 50;
const int MAX_ADMINS = 5;

struct Section {
    string name;
    int num_students;
    struct Student {
        int roll_no;
        string name;
        string password;
    } students[MAX_STUDENTS_PER_SECTION];
};

struct Admin {
    string name;
    string designation;
    string password;
};


Section sections[MAX_SECTIONS];
Admin admins[MAX_ADMINS];
int num_sections = 0;
int num_admins = 1;

// Function declarations
void admin_login();
void student_login(int section_idx, int student_idx);

int main() {
   
    admins[0].name = "admin";
    admins[0].designation = "admin";
    admins[0].password = "admin";
    
    // Menu loop
    while (true) {
        int choice;
        cout << "Choose an option:" << endl;
        cout << "1. Admin login" << endl;
        cout << "2. Student login" << endl;
        cout << "3. Exit" << endl;
        cout << "Your choice: ";
        cin >> choice;
        
        switch (choice) {
            case 1:
                admin_login();
                break;
            case 2:
                int section_idx, student_idx;
                cout << "Enter your section number (1-" << num_sections << "): ";
                cin >> section_idx;
                cout << "Enter your roll number (1-" << sections[section_idx-1].num_students << "): ";
                cin >> student_idx;
                student_login(section_idx-1, student_idx-1);
                break;
            case 3:
                cout << "Goodbye!" << endl;
                return 0;
            default:
                cout << "Invalid choice." << endl;
                break;
        }
    }
}

void admin_login() {
    string name, password;
    cout << "Enter your name: ";
    cin >> name;
    cout << "Enter your password: ";
    cin >> password;
    
    
    int admin_idx = -1;
    for (int i = 0; i < num_admins; i++) {
        if (admins[i].name == name) {
            admin_idx = i;
            break;
        }
    }
    
   
    if (admin_idx != -1 && admins[admin_idx].password == password) {
        cout << "Login successful. Welcome, " << admins[admin_idx].name << "!" << endl;
        
        
      if (password == "admin") {
            string new_password;
            cout << "You are logging in for the first time. Please enter a new password: ";
            cin >> new_password;
            admins[admin_idx].password = new_password;
            cout << "Password changed successfully." << endl;
        }
        
        // Admin menu loop
        while (true) {
            int choice;
            cout << "Choose an option:" << endl;
            cout << "1. Add section" << endl;
            cout << "2. Add student" << endl;
            cout << "3. Add admin" << endl;
            cout << "4. Update section" << endl;
        }

        //admin section closed here 
    }
        int main ()
        {

        }