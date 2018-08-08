fs = require('fs');

function phoneNumber(err, data) {
    console.log('data: ', data)
}

fs.readdir('/..', phoneNumber);

console.log("this comes after");

// output
//
// this comes after
// data:  [ '.DS_Store',
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
