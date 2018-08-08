fs = require('fs');

data = fs.readdirSync('/..');
console.log('data:', data);

console.log("this comes after");

# output

# data: [ '.DS_Store',
#   '.DocumentRevisions-V100',
#   '.OSInstallerMessages',
#   '.PKInstallSandboxManager',
#   '.PKInstallSandboxManager-SystemSoftware',
#   '.Spotlight-V100',
#   '.Trashes',
#   '.dbfseventsd',
#   '.file',
#   '.fseventsd',
#   '.vol',
#   'Applications',
#   'Library',
#   'Network',
#   'System',
#   'Users',
#   'Volumes',
#   'bin',
#   'cores',
#   'dev',
#   'etc',
#   'home',
#   'installer.failurerequests',
#   'net',
#   'private',
#   'sbin',
#   'tmp',
#   'usr',
#   'var' ]
# this comes after
