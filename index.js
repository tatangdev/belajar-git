class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    action() {
        console.log('Says ' + this.sound)
    }
}

/*
    1. git init
        -> menginisialisasi project git baru
    2. git add
        -> memindahkan file kedalam staging area
    3. git commit -m "commit message"
        -> menambahkan berita acara
        -> memindahkan perubahan kedalam local repository
    4. git status
        -> untuk melihat status perubahan
    5. git remote add
        -> menambahkan link remote repository
    6. git remote -v
        -> melihat remote yang ada
    7. git push
        -> upload dari local repository ke remote repository
    8. git pull
        -> download dari remote repository ke local repository
*/