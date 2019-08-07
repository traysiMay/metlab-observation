pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721MetadataMintable.sol";

contract ToadTix is ERC721MetadataMintable {

    string public name;
    string public symbol;

    constructor(string memory _name, string memory _symbol)
    ERC721Metadata(name, symbol) public {
        name = _name;
        symbol = _symbol;
    }
}