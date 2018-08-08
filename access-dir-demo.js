var fs = require('fs')

//mac
fs.readdir('/..', (err, data) => {
    console.log(data)
})
//windows
// fs.readdir('c:/', (err, data) => {
//     console.log(data)
// })

// output
//
// [ '.DS_Store',
//   '.DocumentRevisions-V100',
//   '.OSInstallerMessages',
//   '.PKInstallSandboxManager',
//   '.PKInstallSandboxManager-SystemSoftware',
//   '.Spotlight-V100',
//   '.Trashes',
//   '.dbfseventsd',
//   '.file',
//   '.fseventsd',
//   '.vol',
//   'Applications',
//   'Library',
//   'Network',
//   'System',
//   'Users',
//   'Volumes',
//   'bin',
//   'cores',
//   'dev',
//   'etc',
//   'home',
//   'installer.failurerequests',
//   'net',
//   'private',
//   'sbin',
//   'tmp',
//   'usr',
//   'var' ]
